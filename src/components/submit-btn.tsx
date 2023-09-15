import { experimental_useFormStatus as useFormStatus } from 'react-dom';

const SubmitBtn: React.FC = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      disabled={pending}
      className='w-full rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 disabled:bg-opacity-60 sm:w-auto'
    >
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white' />
      ) : (
        'Submit'
      )}
    </button>
  );
};

export default SubmitBtn;
