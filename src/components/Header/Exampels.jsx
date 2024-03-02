import TabButton from "../TabButton/TabButton"
import Section from './Section'
import { useState } from 'react'
import { EXAMPLES } from '../../data';
import Tabs from "./Tabs";

export default function Exampels() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handlerSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please Select a topic</p>

  if (selectedTopic) {
    tabContent = <div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  }

  return (
    <Section title='Exampels' id='examples'>
      <Tabs
        buttons={
          <>
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => handlerSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handlerSelect('jsx')}>Jsx</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handlerSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handlerSelect('state')}>State</TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  )
}