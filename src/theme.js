export default {
  "fonts": {
    "body": "-apple-system, BlinkMacSystemFont, sans-serif",
    "heading": "-apple-system, BlinkMacSystemFont, sans-serif"
  },
  "space": [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256
  ],
  "fontSizes": [
    12,
    14,
    16,
    20,
    24,
    32,
    48,
    64,
    72,
    96
  ],
  "colors": {
    "black": "#000",
    "text": "#000",
    "blue": "#33e",
    "darkGray": "#666",
    "gray": "#ccc",
    "lightGray": "#eeeeee",
    "background": "#fff"
  },
  "styles": {
    "root": {
      "fontFamily": "body"
    },
    "a": {
      "textDecoration": "none",
      "color": "blue"
    },
    "p": {
      "fontSize": 3,
      "lineHeight": 1.5,
      "maxWidth": 800
    },
    "li": {
      "fontSize": 3,
      "lineHeight": 1.5
    },
    "blockquote": {
      "color": "darkGray",
      "borderLeft": "8px solid",
      "borderColor": "blue",
      "pl": 4,
      "py": 2,
      "& p": {
        "fontSize": 4
      }
    },
    "hr": {
      "my": 4,
      "borderStyle": "solid",
      "borderColor": "lightGray"
    },
    inlineCode: {
      backgroundColor: '#fafafa',
      px: 2
    },
    pre: {
      fontSize: 3,
      backgroundColor: "#fafafa",
      borderRadius: 4,
      p: 3,
      overflowX: 'auto'
    },
    textStyles: {
      'caps': {
        textTransform: 'uppercase', 
        letterSpacing: '0.05em'
      }
    },
    "Header": {
      "fontWeight": "bold",
      "p": [1, 2, 3],
      "& a": {
        "color": "black",
        "textDecoration": "none"
      }
    }
  }
}
