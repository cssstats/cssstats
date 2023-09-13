/** @jsx jsx */
import { jsx } from 'theme-ui'
import uniq from 'lodash.uniq'
import chroma from 'chroma-js'
import Plotly from 'plotly.js-dist'
import { useEffect, useRef } from 'react'

const convertColors = (colors, targetSpace) => {
  return colors.map(color => {
    try {
      let converted;

      switch(targetSpace) {
          case 'rgb':
              converted = chroma(color).rgb();
              return { r: converted[0], g: converted[1], b: converted[2] };
          case 'hsl':
              converted = chroma(color).hsl();
              return { h: converted[0], s: converted[1], l: converted[2] };
          case 'hsv':
              converted = chroma(color).hsv();
              return { h: converted[0], s: converted[1], v: converted[2] };
          case 'lab':
              converted = chroma(color).lab();
              return { L: converted[0], a: converted[1], b: converted[2] };
          default:
              throw new Error(`Unknown color space: ${targetSpace}`);
      }
    } catch (error) {
      return null; // Return null for colors that can't be converted
    }
  }).filter(Boolean); // Filter out null values
};

export default ({ colors = [], colorspace = 'rgb', title = '' }) => {
  const plotDivRef = useRef(null);  // Create a ref to get the div where the plot will be rendered
  
  const convertedColors = convertColors(colors, colorspace);

  useEffect(() => {
    const xValues = convertedColors.map(color => Object.values(color)[0]);
    const yValues = convertedColors.map(color => Object.values(color)[1]);
    const zValues = convertedColors.map(color => Object.values(color)[2]);
    
    const dataColor = convertedColors.map(color => {
      switch (colorspace) {
        case 'rgb':
          return `rgb(${color.r}, ${color.g}, ${color.b})`;
        case 'hsl':
          return `hsl(${color.h}, ${color.s}%, ${color.l}%)`;
        case 'hsv':
          // Chroma.js doesn't have direct hsv string support, so we convert it back to RGB for visualization.
          return chroma.hsv(color.h, color.s, color.v).css();
        case 'lab':
          return chroma.lab(color.L, color.a, color.b).css();
        default:
          return '#000'; // Default color if something goes wrong
      }
    });

    const data = [{
      type: 'scatter3d',
      mode: 'markers',
      x: xValues,
      y: yValues,
      z: zValues,
      marker: {
        size: 10,
        color: dataColor,  // This will represent the actual color value
        opacity: 1
      }
    }];

    const layoutRanges = {
      rgb: { x: [0, 255], y: [0, 255], z: [0, 255] },
      hsl: { x: [0, 360], y: [0, 100], z: [0, 100] },
      hsv: { x: [0, 360], y: [0, 100], z: [0, 100] },
      lab: { x: [0, 100], y: [-128, 127], z: [-128, 127] }
    };

    const layout = {
      height: 500,
      width: 500,
      scene: {
        xaxis: {
          title: Object.keys(convertedColors[0])[0].toUpperCase(),
          range: layoutRanges[colorspace].x
        },
        yaxis: {
          title: Object.keys(convertedColors[0])[1].toUpperCase(),
          range: layoutRanges[colorspace].y
        },
        zaxis: {
          title: Object.keys(convertedColors[0])[2].toUpperCase(),
          range: layoutRanges[colorspace].z
        }
      }
    };

    Plotly.newPlot(plotDivRef.current, data, layout, { responsive: true, displayModeBar: false });
  }, [colors, colorspace]);

  return (
    <section style={{ padding: '32px' }}>
      <h4 style={{ marginTop: 0, textAlign:'center'}}>{title}</h4>
      <div ref={plotDivRef} style={{ border: '1px solid #eee'}}>  {/* Use the ref here */}
      </div>
    </section>
  )
};
