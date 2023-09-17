import '../scss/pie.css'

const Pie = () =>{
    return(
        <section className='pie-container' >
            <article className='data-article'>
                <h3>Desarrollado por</h3>
                <p>Dicias S.A de C.V.</p>
            </article>

            <article className='img-article'>
                <a href='https://www.instagram.com/ale_maciaas_/' target='_blank'>
                <img src='../../img/instagram.png'  />
                </a>

                <a href='https://github.com/Dicias' target='_blank'>
                    <img src='../../img/github.png' />
                </a>
            </article>
        </section>
    )
}

export default Pie