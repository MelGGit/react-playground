import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

export default () => {
  const [size, setSize] = useState(100)
  const [radius, setRadius] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [color, setColor] = useState()

  const style = {
    width: size + 'px',
    height: size + 'px',
    borderRadius: radius + '%',
    rotate: rotation + 'deg',
    backgroundColor: '#' + color,
    transform: `translateX(${translateX}vh)`,
  }

  return (
    <div className="App">
      <label>
        Size:{' '}
        <input
          value={size}
          onChange={handleSizeChange}
          type="range"
          max="200"
        />
      </label>
      <label>
        Border-Radius:{' '}
        <input
          value={radius}
          onChange={handleRadiusChange}
          type="range"
          max="50"
        />
      </label>
      <label>
        Rotation:{' '}
        <input
          value={rotation}
          onChange={handleRotationChange}
          type="range"
          max="360"
        />
      </label>
      <label>
        TranslateX:{' '}
        <input
          value={translateX}
          onChange={handleTranslateXChange}
          type="range"
          max="100vh"
        />
      </label>
      <button onClick={handleColorChange}>Change Color</button>
      <div style={style} className="Box" />
    </div>
  )
  function handleSizeChange(event) {
    const input = event.target
    setSize(input.value)
  }

  function handleRadiusChange(event) {
    const input = event.target.value
    setRadius(input)
  }

  function handleRotationChange(event) {
    const input = event.target.value
    setRotation(input)
  }

  function handleColorChange() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    setColor(randomColor)
  }

  function handleTranslateXChange(event) {
    const input = event.target.value
    setTranslateX(input)
  }
}
