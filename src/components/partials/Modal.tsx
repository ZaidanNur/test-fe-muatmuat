"use client"
import React from 'react'
import { addProduct } from '../../lib/data';
import { useFormState } from 'react-dom';

const initialState = {};

function Modal(props) {
    const [state, formAction] = useFormState(addProduct, initialState);
    console.log(initialState)
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
    <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>{props.title}</button>
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box bg-white text-black">
            <div className='text-black! flex flex-1 flex-col'>
                <form method="dialog" action={formAction}>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend text-black">Nama</legend>
                        <input type="text" name='title' className="input w-full bg-white border border-black" placeholder="My awesome page" />
                        {state.errors?.title && <p>{state.errors.title}</p>}
                    </fieldset>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend text-black">Harga</legend>
                        <input type="text" name='price' className="input w-full bg-white border border-black" placeholder="My awesome page" />
                        {state.errors?.price && <p>{state.errors.price}</p>}
                    </fieldset>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend text-black">Stok</legend>
                        <input type="text" name='stock' className="input w-full bg-white border border-black" placeholder="My awesome page" />
                        {state.errors?.stock && <p>{state.errors.stock}</p>}
                    </fieldset>
                    <button className="btn btn-success mr-4">Simpan</button>
                </form>
                <div className="modal-action flex justify-center text-white!">
                        <form method="dialog">

                        <button className="btn btn-error">Kembali</button>
                        </form>
                </div>
            </div>
        </div>
    </dialog>
    </div>
  )
}

export default Modal
