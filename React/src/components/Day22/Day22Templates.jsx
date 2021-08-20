const Day22Templates=({templates, setMeme})=>
{
    return(
        <>
        {
         templates.map((template)=>
              {
                  return(
                      <>
                      <div key={template.id} className="meme_back22" onClick={()=>
                      {
                          setMeme(template);
                      }}>
                      <img src={template.url} alt="pic" className="div22" key={template.id}/>
                     </div>
                  </>
                  );
        })
        }
        </>
    );
}
export default Day22Templates;