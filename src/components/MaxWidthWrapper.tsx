import { cn } from '../lib/utils';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: Props) => {
  return (
    <div className={cn('px-6 sm:px-10 md:px-14 lg:px-20', className)}>
      {children}
    </div>
  );
};
export default MaxWidthWrapper;
