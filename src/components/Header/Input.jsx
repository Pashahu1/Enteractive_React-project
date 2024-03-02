
export default function Input({ text }) {
  return (
    <div id='content'>
      <input type='text' placeholder={text} />
      <input placeholder={text} />
    </div>
  )
}