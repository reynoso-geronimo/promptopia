import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text_left">
        <span className="blue_gradient">{type}</span>
        <p className="desc text-left max-w-md">
          {type} y comporta prompts increibles con el mundo y deja que tu
          imaginacion sea libre con cualquier plataforma de IA
        </p>
        <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label>
          <span  className="font-satoshi font-semibold text-base text-gray-700">Tu prompt de IA</span>
          <textarea  value={post.prompt} onChange={(e)=>setPost({...post , prompt:e.target.value})} placeholder="Escribe tu Prompt aqui" required className="form_textarea"/>
        </label>


        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Tag {` `} <span className="font-normal">(#product, #webdevelopment, #idea)</span></span>
          <input  value={post.tag} onChange={(e)=>setPost({...post , tag:e.target.value})} placeholder="#tag" required className="form_input"/>
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href='/' className='text-gray-500 text-sm'>Cancelar</Link>
          <button type="submit" disabled={submitting} className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white">
            {submitting? `${type}...`: type}
            
          </button>
        </div>
        </form>
        
       
      </h1>
    </section>
  );
};

export default Form;
