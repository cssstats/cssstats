/** @jsx jsx */
import { jsx } from 'theme-ui'
import { intComma } from 'humanize-plus'

import { SlabStat } from './library'

export default ({ properties }) => {
  const metrics = [
    {
      name: 'Display',
      value: properties['display'] || []
    },
    {
      name: 'Float',
      value: properties.float || []
    },
    {
      name: 'Width',
      value: properties.width || []
    },
    {
      name: 'Height',
      value: properties.height || []
    },
    {
      name: 'Max Width',
      value: properties['max-width'] || []
    },
    {
      name: 'Min Width',
      value: properties['min-width'] || []
    },
    {
      name: 'Max Height',
      value: properties['max-height'] || []
    },
    {
      name: 'Min Height',
      value: properties['min-height'] || []
    },
    {
      name: 'Aspect Ratio',
      value: properties['aspect-ratio'] || []
    },
    {
      name: 'Left',
      value: properties['left'] || []
    },
    {
      name: 'Right',
      value: properties['right'] || []
    },
    {
      name: 'Top',
      value: properties['top'] || []
    },
    {
      name: 'Bottom',
      value: properties['bottom'] || []
    },
  ]

  const gridMetrics = [
    {
      name: 'Grid',
      value: properties['grid'] || []
    },
    {
      name: 'Grid Area',
      value: properties['grid-area'] || []
    },
    {
      name: 'Grid Auto Columns',
      value: properties['grid-auto-columns'] || []
    },
    {
      name: 'Grid Auto Flow',
      value: properties['grid-auto-flow'] || []
    },
    {
      name: 'Grid Template',
      value: properties['grid-template'] || []
    },
    {
      name: 'Grid Template Areas',
      value: properties['grid-template-areas'] || []
    },
    {
      name: 'Grid Template Columns',
      value: properties['grid-template-columns'] || []
    },
    {
      name: 'Grid Template Rows',
      value: properties['grid-template-rows'] || []
    },
    
  ]

  const spacingMetrics = [
    {
      name: 'Padding',
      value: properties['padding'] || []
    },
    {
      name: 'Padding Left',
      value: properties['padding-left'] || []
    },
    {
      name: 'Padding Right',
      value: properties['padding-right'] || []
    },
    {
      name: 'Padding Top',
      value: properties['padding-top'] || []
    },
    {
      name: 'Padding Bottom',
      value: properties['padding-bottom'] || []
    },
    {
      name: 'Margin',
      value: properties['margin'] || []
    },
    {
      name: 'Margin Left',
      value: properties['margin-left'] || []
    },
    {
      name: 'Margin Right',
      value: properties['margin-right'] || []
    },
    {
      name: 'Margin Top',
      value: properties['margin-top'] || []
    },
    {
      name: 'Margin Bottom',
      value: properties['margin-bottom'] || []
    },
    {
      name: 'Gap',
      value: properties['gap'] || []
    },
    {
      name: 'Column Gap',
      value: properties['column-gap'] || []
    },
    {
      name: 'Row Gap',
      value: properties['row-gapcolumn'] || []
    }
  ]

  const typographyMetrics = [
    {
      name: 'Font',
      value: properties['font'] || []
    },
    {
      name: 'Font Family',
      value: properties['font-family'] || []
    },
    {
      name: 'Font Size',
      value: properties['font-size'] || []
    },
    {
      name: 'Font Style',
      value: properties['font-style'] || []
    },
    {
      name: 'Font Variant',
      value: properties['font-style'] || []
    },
    {
      name: 'Font Variant Numeric',
      value: properties['font-variant-numeric'] || []
    },
    {
      name: 'Font Variant Position',
      value: properties['font-variant-position'] || []
    },
    {
      name: 'Font Variant Settings',
      value: properties['font-variant-settings'] || []
    },
    {
      name: 'Font Weight',
      value: properties['font-weight'] || []
    },
    {
      name: 'Text Align',
      value: properties['text-align'] || []
    },
    {
      name: 'Line Height',
      value: properties['line-height'] || []
    },
    {
      name: 'Letter Spacing',
      value: properties['letter-spacing'] || []
    },
    {
      name: 'Text Decoration',
      value: properties['text-decoration'] || []
    },
    {
      name: 'Text Justify',
      value: properties['text-justify'] || []
    },
    {
      name: 'Text Shadow',
      value: properties['text-shadow'] || []
    },
    {
      name: 'Text Transform',
      value: properties['text-transform'] || []
    },
    {
      name: 'Text Indent',
      value: properties['text-indent'] || []
    },
    {
      name: 'Text Overflow',
      value: properties['text-overflow'] || []
    },
    {
      name: 'Text Orientation',
      value: properties['text-orientation'] || []
    },
    {
      name: 'Text Overflow',
      value: properties['text-orientation'] || []
    },
    {
      name: 'Text Rendering',
      value: properties['text-rendering'] || []
    },
    {
      name: 'White Space',
      value: properties['white-space'] || []
    },
    {
      name: 'Word Break',
      value: properties['word-break'] || []
    },
    {
      name: 'Word Spacing',
      value: properties['word-spacing'] || []
    },
  ]

  const colorMetrics = [
    {
      name: 'Color',
      value: properties.color || []
    },
    {
      name: 'Background Color',
      value: properties['background-color'] || []
    },
    {
      name: 'Border Color',
      value: properties['border-color'] || []
    },
    {
      name: 'Accent Color',
      value: properties['accent-color'] || []
    },
    {
      name: 'Border Left Color',
      value: properties['border-left-color'] || []
    },
    {
      name: 'Border Right Color',
      value: properties['border-right-color'] || []
    },
    {
      name: 'Border Top Color',
      value: properties['border-top-color'] || []
    },
    {
      name: 'Border Bottom Color',
      value: properties['border-bottom-color'] || []
    },
    {
      name: 'Box Shadow',
      value: properties['box-shadow'] || []
    }
  ]

  const borderMetrics = [
    {
      name: 'Border',
      value: properties['border'] || []
    },
    {
      name: 'Border Width',
      value: properties['border-width'] || []
    },
    {
      name: 'Border Style',
      value: properties['border-style'] || []
    },
    {
      name: 'Border Left',
      value: properties['border-left'] || []
    },
    {
      name: 'Border Left Width',
      value: properties['border-left-width'] || []
    },
    {
      name: 'Border Left Style',
      value: properties['border-left-style'] || []
    },
    {
      name: 'Border Left Color',
      value: properties['border-left-style'] || []
    },
    {
      name: 'Border Right',
      value: properties['border-right'] || []
    },
    {
      name: 'Border Right Width',
      value: properties['border-right-width'] || []
    },
    {
      name: 'Border Right Style',
      value: properties['border-right-style'] || []
    },
    {
      name: 'Border Right Color',
      value: properties['border-right-style'] || []
    },
    {
      name: 'Border Top',
      value: properties['border-top'] || []
    },
    {
      name: 'Border Top Width',
      value: properties['border-top-width'] || []
    },
    {
      name: 'Border Top Style',
      value: properties['border-top-style'] || []
    },
    {
      name: 'Border Top Color',
      value: properties['border-top-style'] || []
    },
    {
      name: 'Border Bottom',
      value: properties['border-bottom'] || []
    },
    {
      name: 'Border Bottom Width',
      value: properties['border-bottom-width'] || []
    },
    {
      name: 'Border Bottom Style',
      value: properties['border-bottom-style'] || []
    },
    {
      name: 'Border Bottom Color',
      value: properties['border-bottom-style'] || []
    },
    {
      name: 'Border Collapse',
      value: properties['border-collapse'] || []
    },
    {
      name: 'Border Image',
      value: properties['border-image'] || []
    },
    {
      name: 'Border Image Outset',
      value: properties['border-image-outset'] || []
    },
    {
      name: 'Border Image Repeat',
      value: properties['border-image-repeat'] || []
    },
    {
      name: 'Border Image Slice',
      value: properties['border-image-repeat'] || []
    },
    {
      name: 'Border Image Source',
      value: properties['border-image-source'] || []
    },
    {
      name: 'Border Image Width',
      value: properties['border-image-width'] || []
    },
    {
      name: 'Border Radius',
      value: properties['border-radius'] || []
    },
    {
      name: 'Border Radius Top Left',
      value: properties['border-radius-top-left'] || []
    },
    {
      name: 'Border Radius Top Right',
      value: properties['border-radius-top-right'] || []
    },
    {
      name: 'Border Radius Bottom Left',
      value: properties['border-radius-bottom-left'] || []
    },
    {
      name: 'Border Radius Bottom Right',
      value: properties['border-radius-bottom-right'] || []
    },
    {
      name: 'Box Shadow',
      value: properties['box-shadow'] || []
    },
  ]

  const backgroundMetrics = [
    {
      name: 'Background',
      value: properties['background'] || []
    },
    {
      name: 'Background Attachment',
      value: properties['background-attachment'] || []
    },
    {
      name: 'Background Blend Mode',
      value: properties['background-blend-mode'] || []
    },
    {
      name: 'Background Image',
      value: properties['background-image'] || []
    },
    {
      name: 'Background Clip',
      value: properties['background-clip'] || []
    },
    {
      name: 'Background Origin',
      value: properties['background-origin'] || []
    },
    {
      name: 'Background Position',
      value: properties['background-position'] || []
    },
    {
      name: 'Background Position X',
      value: properties['background-position-x'] || []
    },
    {
      name: 'Background Position Y',
      value: properties['background-position-y'] || []
    },
    {
      name: 'Background Repeat',
      value: properties['background-repeat'] || []
    },
    {
      name: 'Background Size',
      value: properties['background-size'] || []
    },
  ]

  const motionMetrics = [
    {
      name: 'Transition',
      value: properties['transition'] || []
    },
    {
      name: 'Transition Delay',
      value: properties['transition-delay'] || []
    },
    {
      name: 'Transition Duration',
      value: properties['transition-duration'] || []
    },
    {
      name: 'Transition Timing Function',
      value: properties['transition-timing-function'] || []
    },
    {
      name: 'Animation',
      value: properties['animation'] || []
    },
    {
      name: 'Animation Delay',
      value: properties['animation-delay'] || []
    },
    {
      name: 'Animation Direction',
      value: properties['animation-direction'] || []
    },
    {
      name: 'Animation Duration',
      value: properties['animation-duration'] || []
    },
    {
      name: 'Animation Fill Mode',
      value: properties['animation-fill-mode'] || []
    },
    {
      name: 'Animation Iteration Count',
      value: properties['animation-iteration-count'] || []
    },
    {
      name: 'Animation Name',
      value: properties['animation-name'] || []
    },
    {
      name: 'Animation Play State',
      value: properties['animation-play-state'] || []
    },
    {
      name: 'Animation Timing Function',
      value: properties['animation-timing-function'] || []
    },
  ]

  return (
    <div>
      <h2
        id="total-declaration-counts"
        children="Total Declaration Counts"
        sx={{
          fontSize: 5,
          mb: 0,
        }}
      />
      <p sx={{ fontSize: 2, mt: 0, opacity: 0.7, lineHeight: 1.5 }}>
        A declaration represents a property value pair. e.g. display: block
        would represent 1 declaration
      </p>

      <h3
        id="layout-and-structure"
        sx={{
          mt: 4,
          mb: 3,
          fontSize: 1,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}
      >
        Layout and Structure
      </h3>
      <div>
        <div sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '16px' ,}} 
          children={metrics.map(metric => (
            <div 
              key={metric.name}
            >
              <SlabStat
                title={metric.name}
                stat={intComma(metric.value.length)}
              />
            </div>
          ))}
        />
      </div>
      <h3
        id="spacing"
        sx={{
          mt: 4,
          mb: 3,
          fontSize: 1,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}
      >
        Spacing
      </h3>
      <div
        sx={{ display: 'flex', flexWrap: 'wrap' }}
        children={spacingMetrics.map(metric => (
          <div key={metric.name} sx={{ mb: 3, width: ['50%', '25%', '20%'] }}>
            <SlabStat
              title={metric.name}
              stat={intComma(metric.value.length)}
            />
          </div>
        ))}
      />

      <h3
        id="grid"
        sx={{
          mt: 4,
          mb: 3,
          fontSize: 1,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}
      >
        Grid
      </h3>
      <div
        sx={{ display: 'flex', flexWrap: 'wrap', }}
        children={gridMetrics.map(metric => (
          <div key={metric.name} sx={{ mb: 3, display: 'flex', width: ['50%', '25%', '20%'] }}>
            <SlabStat
              title={metric.name}
              stat={intComma(metric.value.length)}
            />
          </div>
        ))}
      />
      <h3
        id="skins"
        sx={{
          mt: 4,
          mb: 3,
          fontSize: 1,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}
      >
        Skins
      </h3>
      <div
        sx={{ display: 'flex', flexWrap: 'wrap' }} 
        children={colorMetrics.map(metric => (
          <div key={metric.name} sx={{ display: 'flex', mb: 3, width: ['50%', '25%', '20%'] }}>
            <SlabStat
              title={metric.name}
              stat={intComma(metric.value.length)}
            />
          </div>
        ))}
      />
      <h3
        id="skins"
        sx={{
          mt: 4,
          mb: 3,
          fontSize: 1,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}
      >
        Skins
      </h3>
      <div
        sx={{ display: 'flex', flexWrap: 'wrap' }}
        children={colorMetrics.map(metric => (
          <div key={metric.name} sx={{ mb: 3, width: ['50%', '25%', '20%'], display: 'flex', }}>
            <SlabStat
              title={metric.name}
              stat={intComma(metric.value.length)}
            />
          </div>
        ))}
      />

      <h3
        id="typography"
        sx={{
          mt: 4,
          mb: 3,
          fontSize: 1,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}
      >
        Typography
      </h3>
      <div
         sx={{ display: 'flex', flexWrap: 'wrap'}}>
        <div
         sx={{ display: 'flex', flexWrap: 'wrap', }}
          children={typographyMetrics.map(metric => (
            <div
              key={metric.name}
              sx={{ display: 'flex', mb: 3, width: ['50%', '25%', '20%'] }}
            >
              <SlabStat
                title={metric.name}
                stat={intComma(metric.value.length)}
              />
            </div>
          ))}
        />
      </div>
      <h3
        id="borders"
        sx={{
          mt: 4,
          mb: 3,
          fontSize: 1,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}
      >
        Borders
      </h3>
      <div>
        <div
          sx={{ display: 'flex', flexWrap: 'wrap'}}
          children={borderMetrics.map(metric => (
            <div
              key={metric.name}
              sx={{ mb: 3, width: ['50%', '25%', '20%'] }}
            >
              <SlabStat
                title={metric.name}
                stat={intComma(metric.value.length)}
              />
            </div>
          ))}
        />
      </div>
      <h3
        id="backgrounds"
        sx={{
          mt: 4,
          mb: 3,
          fontSize: 1,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}
      >
        Background
      </h3>
      <div>
        <div
          sx={{ display: 'flex', flexWrap: 'wrap' }}
          children={backgroundMetrics.map(metric => (
            <div
              key={metric.name}
              sx={{ display: 'flex', mb: 3, width: ['50%', '25%', '20%'] }}
            >
              <SlabStat
                title={metric.name}
                stat={intComma(metric.value.length)}
              />
            </div>
          ))}
        />
      </div>
      <h3
        id="Motion"
        sx={{
          mt: 4,
          mb: 3,
          fontSize: 1,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}
      >
        Motion
      </h3>
      <div sx={{}}>
        <div
          sx={{ display: 'flex', flexWrap: 'wrap'}}
          children={motionMetrics.map(metric => (
            <div
              key={metric.name}
              sx={{ display: 'flex', mb: 3, width: ['50%', '25%', '20%'] }}
            >
              <SlabStat
                title={metric.name}
                stat={intComma(metric.value.length)}
              />
            </div>
          ))}
        />
      </div>
    </div>
  )
}
