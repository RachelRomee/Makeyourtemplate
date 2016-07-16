Section.create(
  section_name: "text",
  css_rules: ".text h1{color:black; background-color:yellow;} p{color:blue; background-color:white}",
  html_content: "<h1>Text Section</h1>
  	<p>
  		Gummies wafer marzipan powder jujubes snaps. ice cream lemon drops jelly beans
  snaps tootsie roll chocolate marshmallow cotton candy powder danish dessert
  cake marzipan. marshmallow sugar plum donut pudding caramels cotton candy
  tart cupcake marzipan chocolate tootsie roll powder gummi bears. sesame
  biscuit halvah sesame gingerbread tootsie roll sugar. gummies cotton candy
  chupa chups cupcake marzipan marshmallow halvah brownie bonbon icing macaroon
  halvah. candy canes apple pie lemon drops icing sesame fruitcake sweet
  dessert powder cotton candy chupa chups. bear claw apple pie jelly beans
  sweet bear claw marshmallow marzipan sweet tootsie roll gingerbread fruitcake.
  sweet oat cake chupa chups candy canes fruitcake chupa chups soufflé.
  bear claw sweet lollipop halvah.
  	</p>"
)

Section.create(
  section_name: "gallery",
  css_rules: ".gallery .columns{width: 500px; display: inline-flex;} div{padding: 15px; width: 500px;} img{ height: 500px;}",
  html_content: "
  <div class='columns'>
    <div>
        <img src='http://vignette4.wikia.nocookie.net/breakingbad/images/e/e7/BB-S5B-Walt-590.jpg/revision/latest?cb=20130928055404'>
        <h1>Walter White</h1>
        <p>Walter White, a high school chemistry teacher and family man, learns he has inoperable lung cancer. To secure his family's financial future, he begins making meth with Jesse Pinkman, a former student. The two become known for their top-quality blue meth, but success has its complications: Walt finds himself in over his head in the drug underworld. Meanwhile, a DEA team led by Walt's brother-in-law, Hank Schrader, begins investigating Heisenberg, Walt's alter ego.</p>
    </div>
    <div>
        <img src='https://upload.wikimedia.org/wikipedia/en/f/f2/Jesse_Pinkman2.jpg'>
        <h1>Jesse Pinkman</h1>
        <p>Jesse Pinkman is Walt's former student and partner in the meth business. He was never the brightest student, but has grown to be a skilled meth cook in his own right under Walt's guidance. Jesse initially handled the street part of the operation, though his blunders often required Walt's intervention. </p>
    </div>
    <div>
        <img src='http://vignette2.wikia.nocookie.net/breakingbad/images/8/8b/MikeS5.jpg/revision/latest?cb=20120620015454'>
        <h1>Mike Ehrmantraut</h1>
        <p>Mike Ehrmantraut is Saul Goodman's fixer, his cleaner, his go-to guy for sticky situations. Jesse first meets Mike after the death of his girlfriend, Jane. Mike removes evidence and prepares the shell-shocked Jesse for his interview with the police. Mike sums up his M.O. as he prepares to leave Jesse's duplex: Do I need to state the obvious? he says. I was not here.</p>
    </div>
  </div>"
)

Section.create(
  section_name: "navigation",
  css_rules: ".navigation .navbar{ padding-bottom: 10px; float_left:100px; width: 100%;}
  .navbar-ul{ margin: 0 auto; background: transparent; margin-bottom: -5px; display:
  inline-block; float: none; list-style-type: none;
  width: 100%;},
  .navbar-ul li{display: inline; float: left; color:#000;; font-weight: 500;}",
  html_content: "
  <div class='navbar'>
   <ul class='navbar-ul'>
     <li><a href='#'>About</a></li>
     <li><a href='#'>gallery</a></li>
     <li><a href='#'>text</a></li>
     <li><a href='#'>contact</a></li>
     <li><a href='#'>footer</a></li>
  </ul>
  </div>"
  )

Section.create(
  section_name: "footer",
  css_rules: ".footer.footerdiv{margin: 0 auto; margin-bottom: -5px; text-transform: uppercase; float_left:100px;},
  .footer-ul{ margin: 0 auto; background: transparent; bottom: -5px; display:
    inline-block; float: none; list-style-type: none; width: 60%; },
    .footer-ul li a{ display: block; padding: 10px; text-align: center; font-size: 14px;
    font-weight: 700;
    background: transparent !important;
    text-transform: uppercase; }",
  html_content:"
  <div class='footerdiv'>
   <ul class='footer-ul'>
   <ul class='footer-ul li a'>
      <li><a href='#'> terms of Service</a></li>
      <li><a href='#'> use our colors</a></li>
    
   </ul>
  </div>"
)
