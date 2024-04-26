import { createContext, useState, useEffect, useContext, useRef } from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import { FaChevronDown } from "react-icons/fa";

const AccordionContext = createContext();

export default function Accordion({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);
  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  return (
    <ul {...props}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  );
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
  value: PropTypes.any,
  onChange: PropTypes.func
};

export function AccordionItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordionContext);

  const open = selected === value;
  const ref = useRef(null);

  return (
    <li className="border-2 rounded-xl mb-10 w-[700px] border-darkblue" {...props}>
      <header role="button" onClick={() => setSelected(open ? null : value)} className="flex justify-between p-4 font-semibold">
        {trigger}
        <FaChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </header>
      <div className="overflow-y-hidden transition-all" style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }} >
        <div className="p-4 pt-2" ref={ref}>
          {children}
        </div>
      </div>
    </li >
  );
}

AccordionItem.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
  value: PropTypes.any,
  trigger: PropTypes.node
};
