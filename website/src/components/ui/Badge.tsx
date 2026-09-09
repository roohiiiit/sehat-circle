interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold tracking-widest uppercase border border-teal-200/80">
      {text}
    </span>
  );
}
