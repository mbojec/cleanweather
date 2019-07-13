require('../style/main.scss');
import React from "react";

const Logo = () => (
  <svg width={48} height={48}>
    <title>{'Group'}</title>
    <g fill="none" fillRule="evenodd">
      <path
        d="M31.304 20.16h2.136a7.16 7.16 0 0 1 0 14.32H19.76l-.225-.003c-.098.002-.196.003-.295.003C12.48 34.48 7 29 7 22.24S12.48 10 19.24 10c6.05 0 11.076 4.39 12.064 10.16z"
        stroke="#007BFF"
        strokeWidth={0.8}
        fill="#86C0FF"
      />
      <text
        fill="#FFF"
        fontFamily="Roboto-Regular, Roboto"
        fontSize={16}
        transform="translate(7 10)"
      >
        <tspan x={7.214} y={18.84}>
          {'C'}
        </tspan>
      </text>
      <text
        fill="#FFF"
        fontFamily="Roboto-Regular, Roboto"
        fontSize={8}
        transform="translate(7 10)"
      >
        <tspan x={21.533} y={18.24}>
          {'w'}
        </tspan>
      </text>
    </g>
  </svg>
);

export {Logo}