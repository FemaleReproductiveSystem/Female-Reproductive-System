const myDiv = document.getElementById("myDiv")
const btnOpen = document.querySelector("#btnOpen")
const container = document.getElementById("container")

let funcion = () => {

    myDiv.innerHTML = `
    <h4 class="subTit"><strong>What is the female reproductive system?</strong></h4>
    The female reproductive system is the body parts that help women or people assigned female at birth:
    <ul>
        <li>Have sexual intercourse.</li>
        <li>Reproduce.</li>
        <li>Menstruate.</li>
    </ul><br>
    <h4 class="subTit"><strong>What are the parts of the female reproductive system?</strong></h4>
    The female reproductive anatomy includes both external and internal parts.<br><br>
    <strong>External parts</strong><br>

    The function of your external genitals are to protect the internal parts from infection and allow sperm to enter your vagina.<br><br>
    Your vulva is the collective name for all your external genitals. A lot of people mistakenly use the term “vagina” to describe all female reproductive parts. However, your vagina is its own structure located inside your body.<br><br>

    <p>The main parts of your vulva or external genitals are:</p>
    <ul>
        <li><strong>Labia majora:</strong> Your labia majora (“large lips”) enclose and protect the other external reproductive organs. During puberty, hair growth occurs on the skin of the labia majora, which also contain sweat and oil-secreting glands.</li>
        <li><strong>Labia minora:</strong> Your labia minora (“small lips”) can have a variety of sizes and shapes. They lie just inside your labia majora, and surround the opening to your vagina (the canal that joins the lower part of your uterus to the outside of your body) and urethra (the tube that carries pee from your bladder to the outside of your body). This skin is very delicate and can become easily irritated and swollen.</li>
        <li><strong>Labia minora:</strong> Your labia minora (“small lips”) can have a variety of sizes and shapes. They lie just inside your labia majora, and surround the opening to your vagina (the canal that joins the lower part of your uterus to the outside of your body) and urethra (the tube that carries pee from your bladder to the outside of your body). This skin is very delicate and can become easily irritated and swollen.</li>
        <li><strong>Clitoris:</strong> Your two labia minora meet at your clitoris, a small, sensitive protrusion that’s comparable to a penis in men or people assigned male at birth (AMAB). Your clitoris is covered by a fold of skin called the prepuce and is very sensitive to stimulation.</li>
        <li><strong>Vaginal opening:</strong> Your vaginal opening allows menstrual blood and babies to exit your body. Tampons, fingers, sex toys or penises can go inside your vagina through your vaginal opening.</li>
        <li><strong>Hymen:</strong> Your hymen is a piece of tissue covering or surrounding part of your vaginal opening. It’s formed during development and present during birth.</li>
        <li><strong>Opening to your urethra:</strong> The opening to your urethra is the hole you pee from.</li>
    </ul><br><br>

    <strong>Internal parts</strong><br>

    <ul>
        <li>Vagina: Your vagina is a muscular canal that joins the cervix (the lower part of uterus) to the outside of the body. It can widen to accommodate a baby during delivery and then shrink back to hold something narrow like a tampon. It’s lined with mucous membranes that help keep it moist.</li>
        <li>Cervix: Your cervix is the lowest part of your uterus. A hole in the middle allows sperm to enter and menstrual blood to exit. Your cervix opens (dilates) to allow a baby to come out during a vaginal childbirth. Your cervix is what prevents things like tampons from getting lost inside your body.</li>
        <li>Uterus: Your uterus is a hollow, pear-shaped organ that holds a fetus during pregnancy. Your uterus is divided into two parts: the cervix and the corpus. Your corpus is the larger part of your uterus that expands during pregnancy.</li>
        <li>Ovaries: Ovaries are small, oval-shaped glands that are located on either side of your uterus. Your ovaries produce eggs and hormones.</li>
        <li>Fallopian tubes: These are narrow tubes that are attached to the upper part of your uterus and serve as pathways for your egg (ovum) to travel from your ovaries to your uterus. Fertilization of an egg by sperm normally occurs in the fallopian tubes. The fertilized egg then moves to the uterus, where it implants into your uterine lining.</li>
    </ul>

    <h4 class="subTit"><strong>What are the functions of the female reproductive system?</strong></h4>

    The female reproductive system provides several functions. In addition to allowing a person to have sexual intercourse, it also helps a person reproduce.<br><br>
    Your ovaries produce eggs. These eggs are then transported to your fallopian tube during ovulation where fertilization by a sperm may occur. The fertilized egg then moves to your uterus, where the uterine lining has thickened in response to the normal hormones of your menstrual cycle (also called your reproductive cycle). Once in your uterus, the fertilized egg can implant into the thickened uterine lining and continue to develop. If implantation doesn’t take place, the uterine lining is shed as your menstrual period. In addition, the female reproductive system produces sex hormones that maintain your menstrual cycle.<br><br>
    During menopause, the female reproductive system gradually stops making the female hormones necessary for the menstrual cycle to work. At this point, menstrual cycles can become irregular and eventually stop. You’re considered to be menopausal when you’ve gone an entire year without a menstrual period.<br><br>

    <h4 class="subTit"><strong>What happens during the menstrual cycle?</strong></h4>
    
    Women or people AFAB of reproductive age (beginning anywhere from 11 to 16 years of age) experience cycles of hormonal activity that repeat at about one-month intervals. With every cycle, your body prepares for a potential pregnancy, whether or not that’s your intention. The term menstruation refers to the periodic shedding of your uterine lining when pregnancy doesn’t occur that cycle. Many people call the days that they notice vaginal bleeding their “period.”<br><br>
    The average menstrual cycle takes about 28 days and occurs in phases. These phases include:
    
    <ul>
        <li>The follicular phase (the egg develops).</li>
        <li>The ovulatory phase (release of the egg).</li>
        <li>The luteal phase (hormone levels decrease if the egg doesn’t implant).</li>
    </ul>

    There are four major hormones (chemicals that stimulate or regulate the activity of cells or organs) involved in the menstrual cycle. These hormones include:

    <ul>
        <li>Follicle-stimulating hormone.</li>
        <li>Luteinizing hormone.</li>
        <li>Estrogen.</li>
        <li>Progesterone.</li>
    </ul>

    <ul class="names">
        <li>Ana Salas</li>
        <li>Andrea Benites</li>
        <li>Andrea Garcia</li>
        <li>Estephany Marely</li>
        <li>Justin Molina</li>
        <li>Wilton Ponce</li>
    </ul>
    `
    btnOpen.classList.toggle("close")

    if(btnOpen.classList.contains("close")) {
        btnOpen.innerHTML = "Close"
        myDiv.style.display = "block"
        container.style.height = "600px"
    } else {
        btnOpen.innerHTML = "Open"
        myDiv.style.display = "none"
        container.style.height = "auto"
    }

}

btnOpen.addEventListener("click", funcion)