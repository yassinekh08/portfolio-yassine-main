import { useEffect, useRef } from "react";

const VERT = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";
const FRAG = `precision mediump float;
uniform vec2 r;uniform float t;uniform vec2 m;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+vec2(1.,1.)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n(p);p=p*2.02+vec2(1.7,9.2);a*=.5;}return v;}
void main(){
vec2 uv=gl_FragCoord.xy/r;
vec2 p=(gl_FragCoord.xy-.5*r)/r.y;
float d=length(p-(m-.5*r)/r.y);
vec2 q=vec2(fbm(p*1.6+t*.05),fbm(p*1.6+vec2(5.2,1.3)-t*.04));
float f=fbm(p*1.4+2.2*q+vec2(t*.03,-d*.45));
float ridge=smoothstep(.38,.92,f)*smoothstep(1.5,.15,length(p-vec2(.3,.05)));
vec3 col=mix(vec3(.02,.5,.95),vec3(.1,.9,.8),q.x);
col=mix(col,vec3(.42,.25,.95),q.y*.55);
vec3 o=col*(ridge*.8+exp(-d*3.2)*.32)+vec3(.012,.018,.03);
o*=1.-.55*length(uv-.5);
o+=(h(gl_FragCoord.xy+t)-.5)*.025;
gl_FragColor=vec4(o,1.);}`;

/** Live WebGL aurora that reacts to the pointer. Pauses off-screen; static frame if reduced motion. */
export function ShaderField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uR = gl.getUniformLocation(prog, "r");
    const uT = gl.getUniformLocation(prog, "t");
    const uM = gl.getUniformLocation(prog, "m");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scale = 0.5;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    let visible = true;
    let raf = 0;
    const t0 = performance.now();

    const resize = () => {
      const w = Math.max(2, Math.floor(canvas.clientWidth * scale));
      const h = Math.max(2, Math.floor(canvas.clientHeight * scale));
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
      mouse.x = mouse.tx = w * 0.7;
      mouse.y = mouse.ty = h * 0.55;
    };
    const draw = (time: number) => {
      gl.uniform2f(uR, canvas.width, canvas.height);
      gl.uniform1f(uT, time);
      gl.uniform2f(uM, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const frame = () => {
      raf = requestAnimationFrame(frame);
      if (!visible || document.hidden) return;
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;
      draw((performance.now() - t0) / 1000 + 8);
    };
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.tx = (e.clientX - rect.left) * scale;
      mouse.ty = (rect.bottom - e.clientY) * scale;
    };

    resize();
    window.addEventListener("resize", resize);
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    io.observe(canvas);
    if (reduce) {
      draw(8);
      window.addEventListener("resize", () => draw(8));
    } else {
      window.addEventListener("pointermove", onMove);
      raf = requestAnimationFrame(frame);
    }
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="shader-field" aria-hidden="true" />;
}

/** Letter-by-letter masked rise, used for the hero name. */
export function Split({ text }: { text: string }) {
  return (
    <span className="w" aria-hidden="true">
      {text.split("").map((ch, i) => (
        <span className="ch" style={{ "--i": i } as React.CSSProperties} key={i}>
          {ch}
        </span>
      ))}
    </span>
  );
}

const stack = ["Python", "PyTorch", "LangChain", "FAISS", "Corrective RAG", "Spring Boot", "React", "FastAPI", ".NET", "Docker"];

/** Infinite skills ticker between hero and about. */
export function Marquee() {
  const row = (
    <ul>
      {stack.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
}

export function ScrollBar() {
  return <div className="scroll-progress" aria-hidden="true" />;
}

/** Custom cursor: precise dot + lagging ring that expands over interactive elements. */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const root = document.documentElement;
    root.classList.add("has-cursor");
    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      root.classList.add("cursor-live");
      if (dot.current) dot.current.style.transform = `translate(${x}px,${y}px)`;
      const hot = (e.target as HTMLElement).closest("a,button,label,input,textarea");
      ring.current?.classList.toggle("is-hot", !!hot);
    };
    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (ring.current) ring.current.style.transform = `translate(${rx}px,${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      root.classList.remove("has-cursor", "cursor-live");
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
      <div ref={ring} className="cursor-ring" aria-hidden="true">
        <i />
      </div>
    </>
  );
}

/** Scroll progress, card spotlight and magnetic buttons, all via delegated listeners. */
export function useFx() {
  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => {
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--progress", String(max > 0 ? window.scrollY / max : 0));
    };
    const onMove = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      const card = target.closest<HTMLElement>(".skill-card,.cert-card,.code-window");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
        if (card.matches(".skill-card") && e.pointerType !== "touch") {
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          card.style.setProperty("--tilt-x", `${(0.5 - py) * 9}deg`);
          card.style.setProperty("--tilt-y", `${(px - 0.5) * 9}deg`);
        }
      }
      const btn = target.closest<HTMLElement>(".button:not(.button-icon)");
      if (btn) {
        const r = btn.getBoundingClientRect();
        const dx = (e.clientX - r.left - r.width / 2) * 0.18;
        const dy = (e.clientY - r.top - r.height / 2) * 0.28;
        btn.style.transform = `translate(${dx}px,${dy}px)`;
      }
    };
    const onOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      target.closest<HTMLElement>(".button")?.style.removeProperty("transform");
      const card = target.closest<HTMLElement>(".skill-card");
      if (card && (!e.relatedTarget || !card.contains(e.relatedTarget as Node))) {
        card.style.removeProperty("--tilt-x");
        card.style.removeProperty("--tilt-y");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerout", onOut);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerout", onOut);
    };
  }, []);
}
