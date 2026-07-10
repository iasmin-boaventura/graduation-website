export function HeroCodeSnippet() {
  return (
    <div className="mx-auto max-w-xl rounded-[20px] border border-[#E5E7EB] bg-white/90 p-5 text-left shadow-sm">
      <pre className="overflow-x-auto font-mono text-sm leading-7 text-[#222222] sm:text-[15px]">
        <code>{`public class Graduation {
  public static void main(String[] args) {
    celebrate();
  }
}`}</code>
      </pre>
    </div>
  );
}