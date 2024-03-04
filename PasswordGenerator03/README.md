#package: yup => for validation

# NOTES

## TroubleShooting

1. Port already in use

- The Metro bundler runs on port 8081. If another process is already using that port, you can either terminate that process, or change the port that the bundler uses.

\*\* Terminating a process on port 8081

- lsof -i :8081. => This will show you a list of processes using port 8081, along with their PIDs lsof means "list open files"
  kill -9 <PID>. => Replace <PID> with the actual PID of the process you want to kill.

\*\* Using a port other than 8081

- npm start -- --port=8088

## ScrollView & FlatList

- The ScrollView works best to present a small number of things of a limited size. All the elements and views of a ScrollView are rendered, even if they are not currently shown on the screen.

- If you have a long list of items which cannot fit on the screen, you should use a FlatList instead.

- FlatList only renders elements that are currently showing on the screen, not all the elements at once.

## Styles

- You can also pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles.

- All dimensions in React Native are unitless, and represent density-independent pixels.

- Density-independent pixels (dp or dip) are a unit of measurement used in Android development to express dimensions in a way that is independent of the device's pixel density. This is important because Android devices come in various screen sizes and pixel densities.

## Layout with flex box

- flexDirection defaulting to column instead of row,
- alignContent defaulting to flex-start instead of stretch,
- flexShrink defaulting to 0 instead of 1

- justifyContent describes how to align children within the main axis of their container. Here main axis is vetical axis

- alignItems describes how to align children along the cross axis of their container. Here cross axis is horizontal axis

## Text

- If you want to select text using long press, sue selectable={true}
  <Text selectable={true} style={styles.generatedPassword}>
  {password}
  </Text>
