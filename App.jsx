import React, { useState } from 'react';

const ComponentSelector = ({ name, options, selectedOption, onSelect }) => {
  return (
    <div>
      <h3>{name}</h3>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          style={{ 
            backgroundColor: selectedOption?.name === option.name ? 'lightgreen' : 'lightgrey',
            margin: '5px',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          {option.name} - {option.price} HUF
        </button>
      ))}
    </div>
  );
};

export const App = () => {
  const [processor, setProcessor] = useState(null);
  const [memory, setMemory] = useState(null);

  const processors = [
    { name: 'Intel i5', price: 50000 },
    { name: 'Intel i7', price: 75000 },
  ];
 
  const memories = [
    { name: '8GB RAM', price: 12000 },
    { name: '16GB RAM', price: 25000 },
  ];

  const totalPrice = (processor?.price || 0) + (memory?.price || 0);

  return (
    <div>
      <h2>Számítógép összeszerelő app</h2>
      <ComponentSelector
        name="Processzor"
        options={processors}
        selectedOption={processor}
        onSelect={setProcessor}
      />
      <ComponentSelector
        name="Memória"
        options={memories}
        selectedOption={memory}
        onSelect={setMemory}
      />
      <h3>Teljes ár: {totalPrice} HUF</h3>
    </div>
  );
};

function ComponentSelector({ title, options }) {
  const [selected, setSelected] = useState("");

  return (
    <div className="card p-3 m-2 shadow-sm">
      <h5 className="card-title text-primary">{title}</h5>
      <select
        className="form-select mt-2"
        onChange={(e) => setSelected(e.target.value)}
        value={selected}
      >
        <option value="">Válassz egyet...</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>{opt}</option>
        ))}
      </select>

      {selected && (
        <div className="alert alert-success mt-3">
          <i className="bi bi-check-circle-fill me-2"></i>
          Kiválasztott: <strong>{selected}</strong>
        </div>
      )}
    </div>
  );
}

export function App() {
  const alaplapok = ["ASUS Prime B550", "MSI Tomahawk", "Gigabyte Aorus B650"];
  const tapok = ["Cooler Master 650W", "Corsair RM750x", "BeQuiet! 500W"];
  const ssdk = ["Samsung 980 Pro 1TB", "Crucial P5 Plus 500GB", "Kingston KC3000 2TB"];
  const gpuK = ["NVIDIA RTX 4070", "AMD RX 7900 XT", "Intel Arc A770"];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-success">
        💻 PC Builder – Komponens választó
      </h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3">
        <div className="col">
          <ComponentSelector title="Alaplap" options={alaplapok} />
        </div>
        <div className="col">
          <ComponentSelector title="Tápegység" options={tapok} />
        </div>
        <div className="col">
          <ComponentSelector title="SSD" options={ssdk} />
        </div>
        <div className="col">
          <ComponentSelector title="Videókártya (GPU)" options={gpuK} />
        </div>
      </div>
    </div>
  );
}

export default App;