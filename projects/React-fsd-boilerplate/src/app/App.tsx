const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-18 bg-gray-800 text-white fixed">
      <div className="flex gap-12">
        <a
          className="flex justify-center"
          href="https://react.dev"
          target="_blank"
        >
          <img
            className="w-3xs animate-spin [animation-duration:5s]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png"
            alt=""
          />
        </a>
        <a
          className="flex items-center"
          href="https://feature-sliced.github.io/documentation/"
          target="_blank"
        >
          <img
            className="w-2xs animate-pulse"
            src="https://feature-sliced.github.io/documentation/img/brand/logo-primary.png"
            alt="FSD"
          />
        </a>
      </div>

      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-center font-bold text-5xl mb-6 flex flex-col gap-5">React + FSD <span className="text-sm">Powered by Vite</span></h1>
        <p>Using Tailwind and shadcn for UI</p>
        <p>
          Edit <code>src/app/App.tsx</code> and save to test HMR
        </p>
        <p>Click on the React and FSD logos to learn more</p>
      </div>
    </div>
  );
};

export default App;
