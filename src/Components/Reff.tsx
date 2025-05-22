import { useEffect, useRef } from "react";
// You need to mention which type of DOM element we are referencing to , if not ts compiler will yell and yap
const Reff = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  });
  return (
    <div className="flex items-center justify-center mt-4">
      <input
        ref={inputRef}
        placeholder="Type here...."
        className="text-black"
      />
    </div>
  );
};

export default Reff;
// Current means gimme the actual dom element that the ref is pointing to
//Focus() is native DOM element
// Here using ref would automatically  focueses the input when the component mounts
// Component mounts means that react adds the component to the DOM for the first time
// ? this conditional Operator
