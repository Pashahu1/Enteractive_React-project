import { CORE_CONCEPTS } from '../../data';
import CoreConceps from '../CoreConcepts/CoreConcepts';

export default function CoreConcept() {
  return (
    <section id="core-concepts">
      <h2>Core concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((proces) => <CoreConceps key={proces.title} {...proces} />)}
      </ul>
    </section>
  );
}