import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  narrow?: boolean;
}

export default function SectionWrapper({ id, className, children, narrow }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'px-6 py-24 md:py-32',
        narrow ? 'max-w-4xl mx-auto' : 'max-w-6xl mx-auto',
        className
      )}
    >
      {children}
    </section>
  );
}
