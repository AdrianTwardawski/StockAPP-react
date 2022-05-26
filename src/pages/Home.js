function Home(props) {
  return (
    <h1>{props.email ? 'Hi ' + props.email: 'You are not logged in'}</h1>
  )
}

export default Home