import { FC } from "react";

const ShinyOrbit: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-64 aspect-[7.68/1]"
      fill="none"
    >
      <mask
        id="mask0_126_8"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="100%"
        height="100%"
      >
        <path
          d="M660.477 1.4176C842.717 1.4176 1007.69 10.9869 1127.1 26.4558C1186.81 34.1908 1235.11 43.3983 1268.46 53.6152C1285.15 58.7248 1298.06 64.0781 1306.8 69.6088C1315.57 75.1582 1319.98 80.7909 1319.98 86.4176C1319.98 92.0443 1315.57 97.677 1306.8 103.226C1298.06 108.757 1285.15 114.11 1268.46 119.22C1235.11 129.437 1186.81 138.644 1127.1 146.379C1007.69 161.848 842.717 171.418 660.477 171.418C478.238 171.418 313.26 161.848 193.851 146.379C134.143 138.644 85.8478 129.437 52.4898 119.22C35.8072 114.11 22.8899 108.757 14.1536 103.226C5.38787 97.677 0.977295 92.0443 0.977295 86.4176C0.977295 80.7909 5.38787 75.1582 14.1536 69.6088C22.8899 64.0781 35.8072 58.7248 52.4898 53.6152C85.8478 43.3983 134.143 34.1908 193.851 26.4558C313.26 10.9869 478.238 1.4176 660.477 1.4176Z"
          stroke="white"
        />
      </mask>
      <g mask="url(#mask0_126_8)">
        <ellipse
          cx="660.477"
          cy="86.4176"
          rx="85.5"
          ry="660"
          transform="rotate(-90 660.477 86.4176)"
          fill="black"
        />
        <ellipse
          cx="660.477"
          cy="86.4176"
          rx="85.5"
          ry="660"
          transform="rotate(-90 660.477 86.4176)"
          fill="url(#paint0_angular_126_8)"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_angular_126_8"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(660.477 86.4176) rotate(93.5036) scale(958.339 131.822)"
        >
          <stop offset="0.0122011" stopColor="white" stopOpacity="0.43" />
          <stop offset="0.073425" stopColor="white" stopOpacity="0.19" />
          <stop offset="0.163186" stopColor="white" />
          <stop offset="0.225033" stopColor="white" stopOpacity="0.29" />
          <stop offset="0.34" stopColor="white" />
          <stop offset="0.445" stopColor="white" stopOpacity="0.17" />
          <stop offset="0.55" stopColor="white" />
          <stop offset="0.625" stopColor="white" stopOpacity="0.482759" />
          <stop offset="0.705956" stopColor="white" stopOpacity="0.55" />
          <stop offset="0.762978" stopColor="white" />
          <stop offset="0.810657" stopColor="white" stopOpacity="0.35" />
          <stop offset="0.87" stopColor="white" />
          <stop offset="0.941296" stopColor="white" stopOpacity="0.43" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default ShinyOrbit;
