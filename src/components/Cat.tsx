const Cat = () => {
  return (
    <div className="w-fit h-fit flex items-center justify-center">
      <div className="w-fit h-fit flex flex-col justify-center items-center">
        <div className="w-full h-fit flex items-center justify-center relative">
          {/* Cat Body */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 733 673" className="w-20">
            <path
              fill="#212121"
              d="M111.002 139.5C270.502 -24.5001 471.503 2.4997 621.002 139.5C770.501 276.5 768.504 627.5 621.002 649.5C473.5 671.5 246 687.5 111.002 649.5C-23.9964 611.5 -48.4982 303.5 111.002 139.5Z"
            ></path>
            <path fill="#212121" d="M184 9L270.603 159H97.3975L184 9Z"></path>
            <path fill="#212121" d="M541 0L627.603 150H454.397L541 0Z"></path>
          </svg>

          {/* Tail */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 158 564"
            className="w-[17px] absolute -right-4 top-1/2 animate-tail origin-top"
          >
            <path
              fill="#191919"
              d="M5.97602 76.066C-11.1099 41.6747 12.9018 0 51.3036 0V0C71.5336 0 89.8636 12.2558 97.2565 31.0866C173.697 225.792 180.478 345.852 97.0691 536.666C89.7636 553.378 73.0672 564 54.8273 564V564C16.9427 564 -5.4224 521.149 13.0712 488.085C90.2225 350.15 87.9612 241.089 5.97602 76.066Z"
            ></path>
          </svg>

          {/* ZZZ Text */}
          <div className="flex flex-col w-[50px] absolute -top-24 left-28">
            <span className="text-black font-bold text-[25px] ml-[10px] animate-zzz">Z</span>
            <span className="text-black font-bold text-[15px] animate-zzz-delay">Z</span>
          </div>
        </div>

        {/* Wall */}
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 500 126" className="w-[300px]">
            <line strokeWidth="6" stroke="#7C7C7C" x1="50" y1="3" x2="450" y2="3" />
            <line strokeWidth="6" stroke="#7C7C7C" x1="100" y1="85" x2="400" y2="85" />
            <line strokeWidth="6" stroke="#7C7C7C" x1="125" y1="122" x2="375" y2="122" />
            <line strokeWidth="6" stroke="#7C7C7C" x1="0" y1="43" x2="500" y2="43" />
            {[115.5, 189, 262.5, 336, 409.5].map((x, i) => (
              <line key={i} strokeWidth="6" stroke="#7C7C7C" x1={x} y1="2" x2={x} y2="43" />
            ))}
            {[153, 228, 303, 378].map((x, i) => (
              <line key={i} strokeWidth="6" stroke="#7C7C7C" x1={x} y1="43" x2={x} y2="84" />
            ))}
            {[192, 267, 342].map((x, i) => (
              <line key={i} strokeWidth="6" stroke="#7C7C7C" x1={x} y1="84" x2={x} y2="125" />
            ))}
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Cat