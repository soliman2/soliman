import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*:focus': {
    'outline': 'none !important'
  },
  'html': {
    'direction': 'ltr'
  },
  'ul': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'a': {
    'textDecoration': 'none',
    'fontFamily': ''Roboto Condensed', sans-serif'
  },
  '*': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'WebkitBoxSizing': 'border-box',
    'boxSizing': 'border-box'
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'WebkitBoxSizing': 'border-box',
    'boxSizing': 'border-box'
  },
  'list-inline li': {
    'display': 'inline-block'
  },
  // font-family: 'Roboto Condensed', sans-serif;
  font-family: 'Open Sans', sans-serif;
  // **************************
  // Start sidpar
  'sidpar': {
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'backgroundColor': 'rgba(255, 255, 255, 0.5)',
    'width': [{ 'unit': 'px', 'value': 300 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': '#fff' }],
    'position': 'fixed',
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 40 }],
    // text-align:  center;
  },
  'sidpar menu': {
  },
  'sidpar menu li': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'display': 'block'
  },
  'sidpar menu li:before': {
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 35 }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 35 }],
    'borderRadius': '100%',
    'backgroundColor': '#d2d2d2',
    'color': 'rgba(12, 12, 12, 0.5)',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'marginRight': [{ 'unit': 'px', 'value': 14 }]
  },
  'sidpar menu li a': {
    'color': '#000'
  },
  'sidpar social': {
  },
  // End sidpar
});
