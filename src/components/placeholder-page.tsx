// components/placeholder-page.tsx
import { Spinner } from '@/components/custom-ui/spinner';

interface PlaceholderPageProps {
  title?: string;
  loadingText?: string;
  spinnerSize?: number;
}

export function PlaceholderPage({
  title = 'Loading',
  loadingText = 'Please wait...',
  spinnerSize = 40,
}: PlaceholderPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex flex-col items-center space-y-4 text-center">
        <Spinner size={spinnerSize} />

        {title && (
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        )}

        {loadingText && <p className="text-muted-foreground">{loadingText}</p>}
      </div>
    </div>
  );
}
