'use server';

import { revalidatePath } from 'next/cache';

export async function salvarAviso(formData: FormData) {
  // Por enquanto, no ambiente online (Vercel), o upload local está desativado.
  // Isso evita erros de permissão de escrita no servidor.
  console.log("Tentativa de upload ignorada no ambiente de produção.");
  
  revalidatePath('/'); 
  return { 
    success: true, 
    message: "Ação recebida (Upload desativado na Vercel por enquanto)" 
  };
}