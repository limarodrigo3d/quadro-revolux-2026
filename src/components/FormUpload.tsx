'use client';

import { useState } from 'react';
import { salvarAviso } from '@/app/actions';

export default function FormUpload({ id }: { id: number }) {
  const [status, setStatus] = useState('');

  async function handleAction(formData: FormData) {
    setStatus('Enviando...');
    formData.append('id', id.toString());
    
    const res = await salvarAviso(formData);
    
    if (res.success) {
      setStatus('✅ Atualizado!');
      setTimeout(() => window.location.reload(), 1000);
    } else {
      setStatus('❌ Erro: ' + res.error);
    }
  }

  return (
    <form action={handleAction} className="mt-4 p-4 bg-gray-50 rounded-lg border">
      <input type="file" name="foto" accept="image/*" required className="text-xs mb-3 w-full text-black" />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded text-sm font-bold hover:bg-blue-700">
        SALVAR NO QUADRO
      </button>
      {status && <p className="text-center text-[10px] mt-2 font-bold text-blue-600">{status}</p>}
    </form>
  );
}