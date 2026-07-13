export function HeroCodeSnippet() {
  return (
    <div className="mx-auto w-full max-w-xl overflow-hidden rounded-[20px] border border-[#2F2F2F] bg-[#1E1E1E] p-4 text-left shadow-md sm:p-5">
      <pre className="overflow-x-auto whitespace-pre font-mono text-[11px] leading-6 text-[#E5E7EB] [scrollbar-width:none] sm:text-sm sm:leading-7 [&::-webkit-scrollbar]:hidden">
        <code>
          <span className="text-[#F0A6CA]">public class</span>{" "}
          <span className="text-[#8CC8FF]">Graduation</span>
          <span className="text-[#E5E7EB]"> {"{"}</span>
          {"\n  "}
          <span className="text-[#F0A6CA]">public static void</span>{" "}
          <span className="text-[#FFD580]">main</span>
          <span className="text-[#E5E7EB]">(</span>
          <span className="text-[#8CC8FF]">String</span>
          <span className="text-[#E5E7EB]">[] args) {"{"}</span>
          {"\n    "}
          <span className="text-[#FFD580]">beThankful</span>
          <span className="text-[#E5E7EB]">();</span>
          {"\n    "}
          <span className="text-[#FFD580]">celebrate</span>
          <span className="text-[#E5E7EB]">();</span>
          {"\n  }\n}"}
        </code>
      </pre>
    </div>
  );
}