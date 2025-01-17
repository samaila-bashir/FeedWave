import { useNavigate } from 'react-router-dom';

interface IErrorFallbackProps {
  resetErrorBoundary: (...args: unknown[]) => void;
}

const ErrorFallback = ({ resetErrorBoundary }: IErrorFallbackProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FFFFFF] p-4 text-center">
      <h1 className="mb-6 text-2xl font-bold text-[#647196]">
        There was an error!
      </h1>
      <div className="flex gap-4">
        <button
          type="button"
          className="rounded bg-[#AD1FEA] px-6 py-2 font-medium text-[#FFFFFF] shadow transition hover:bg-[#932DC7]"
          onClick={() => resetErrorBoundary()}
        >
          Try Again
        </button>
        <button
          type="button"
          className="rounded border border-[#647196] bg-transparent px-6 py-2 font-medium text-[#647196] shadow transition hover:bg-[#647196] hover:text-[#FFFFFF]"
          onClick={() => {
            navigate('/', { replace: true });
            window.location.reload();
          }}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
