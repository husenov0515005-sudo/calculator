import './App.css';
import { useState } from 'react';

function App() {

  const [value, setvalue] = useState('')
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-black text-2xl">

      <div className="p-6 rounded-3xl shadow-2xl w-[320px] bg-gray-800 border border-gray-700">

        <input
          className="w-full bg-black text-green-400 text-right text-3xl p-4 rounded-xl mb-5 h-16 outline-none shadow-inner"
          type="text"
          value={value}
          readOnly
        />

        <div className="flex flex-col gap-3">

          <div className="flex gap-3">
            <button onClick={() => setvalue('')} className="btn flex-1 bg-red-500 hover:bg-red-600 text-white rounded-xl py-3">AC</button>
            <button onClick={() => setvalue(String(value).slice(0, -1))} className="btn flex-1 bg-orange-400 hover:bg-orange-500 text-white rounded-xl py-3">DE</button>
            <button value="." onClick={e => setvalue(value + e.target.value)} className="btn flex-1 bg-gray-600 hover:bg-gray-500 text-white rounded-xl py-3">.</button>
            <button value="/" onClick={e => setvalue(value + e.target.value)} className="btn flex-1 bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-3">/</button>
          </div>

          <div className="flex gap-3">
            <button value="7" onClick={e => setvalue(value + e.target.value)} className="btn flex-1 bg-gray-700 hover:bg-gray-600 text-white rounded-xl py-3">7</button>
            <button value="8" onClick={e => setvalue(value + e.target.value)} className="btn flex-1 bg-gray-700 hover:bg-gray-600 text-white rounded-xl py-3">8</button>
            <button value="9" onClick={e => setvalue(value + e.target.value)} className="btn flex-1 bg-gray-700 hover:bg-gray-600 text-white rounded-xl py-3">9</button>
            <button value="*" onClick={e => setvalue(value + e.target.value)} className="btn flex-1 bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-3">*</button>
          </div>

          <div className="flex gap-3">
            <button value="4" onClick={e => setvalue(value + e.target.value)} className="btn flex-1 bg-gray-700 hover:bg-gray-600 text-white rounded-xl py-3">4</button>
            <button value="5" onClick={e => setvalue(value + e.target.value)} className="btn flex-1 bg-gray-700 hover:bg-gray-600 text-white rounded-xl py-3">5</button>
            <button value="6" onClick={e => setvalue(value + e.target.value)} className="btn flex-1 bg-gray-700 hover:bg-gray-600 text-white rounded-xl py-3">6</button>
            <button value="+" onClick={e => setvalue(value + e.target.value)} className="btn flex-1 bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-3">+</button>
          </div>

          <div className="flex gap-3">
            <button value="1" onClick={e => setvalue(value + e.target.value)} className="btn flex-1 bg-gray-700 hover:bg-gray-600 text-white rounded-xl py-3">1</button>
            <button value="2" onClick={e => setvalue(value + e.target.value)} className="btn flex-1 bg-gray-700 hover:bg-gray-600 text-white rounded-xl py-3">2</button>
            <button value="3" onClick={e => setvalue(value + e.target.value)} className="btn flex-1 bg-gray-700 hover:bg-gray-600 text-white rounded-xl py-3">3</button>
            <button value="-" onClick={e => setvalue(value + e.target.value)} className="btn flex-1 bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-3">-</button>
          </div>

          <div className="flex gap-3">
            <button value="0" onClick={e => setvalue(value + e.target.value)} className="btn flex-[2] bg-gray-700 hover:bg-gray-600 text-white rounded-xl py-3">0</button>
            <button value="00" onClick={e => setvalue(value + e.target.value)} className="btn flex-1 bg-gray-700 hover:bg-gray-600 text-white rounded-xl py-3">00</button>

            <button onClick={e=> setvalue(eval(value))} className="btn flex-1 bg-green-500 hover:bg-green-600 text-white rounded-xl py-3">=</button>
          </div>

        </div>
      </div>
    </div >
  );
}

export default App;