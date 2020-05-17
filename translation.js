document.querySelector("#billing_last_name").addEventListener("change", function() {
    let firsttext = document.querySelector("#billing_last_name").value
    let secondtext = translation(firsttext)
    document.querySelector("#billing_last_name").value = secondtext
})

document.querySelector("#billing_first_name").addEventListener("change", function() {
    let firsttext = document.querySelector("#billing_first_name").value
    let secondtext = translation(firsttext)
    document.querySelector("#billing_first_name").value = secondtext
})

document.querySelector("#billing_company").addEventListener("change", function() {
    let firsttext = document.querySelector("#billing_company").value
    let secondtext = translation(firsttext)
    document.querySelector("#billing_company").value = secondtext
})

document.querySelector("#billing_address_1").addEventListener("change", function() {
    let firsttext = document.querySelector("#billing_address_1").value
    let secondtext = translation(firsttext)
    document.querySelector("#billing_address_1").value = secondtext
})

document.querySelector("#billing_address_2").addEventListener("change", function() {
    let firsttext = document.querySelector("#billing_address_2").value
    let secondtext = translation(firsttext)
    document.querySelector("#billing_address_2").value = secondtext
})

document.querySelector("#billing_city").addEventListener("change", function() {
    let firsttext = document.querySelector("#billing_city").value
    let secondtext = translation(firsttext)
    document.querySelector("#billing_city").value = secondtext
})



//Translation Function

function translation(text) {
    let content = ""


    for (let i = 0; i <= text.length; i++) {


        //Smal Letters
        if (text[i] == "α") {
            content += "a"
        }
        if (text[i] == "β") {
            content += "b"
        }
        if (text[i] == "γ") {
            content += "g"
        }
        if (text[i] == "δ") {
            content += "d"
        }
        if (text[i] == "ε") {
            content += "e"
        }
        if (text[i] == "ζ") {
            content += "z"
        }
        if (text[i] == "η") {
            content += "i"
        }
        if (text[i] == "θ") {
            content += "th"
        }
        if (text[i] == "ι") {
            content += "i"
        }
        if (text[i] == "κ") {
            content += "k"
        }
        if (text[i] == "λ") {
            content += "l"
        }
        if (text[i] == "μ") {
            content += "m"
        }
        if (text[i] == "ν") {
            content += "n"
        }
        if (text[i] == "ξ") {
            content += "ks"
        }
        if (text[i] == "ο") {
            content += "o"
        }
        if (text[i] == "π") {
            content += "p"
        }
        if (text[i] == "ρ") {
            content += "r"
        }
        if (text[i] == "σ") {
            content += "s"
        }
        if (text[i] == "τ") {
            content += "t"
        }
        if (text[i] == "υ") {
            content += "u"
        }
        if (text[i] == "φ") {
            content += "f"
        }
        if (text[i] == "χ") {
            content += "x"
        }
        if (text[i] == "ψ") {
            content += "ps"
        }
        if (text[i] == "ω") {
            content += "o"
        }
        if (text[i] == "ς") {
            content += "s"
        }

        if (text[i] == " ") {
            content += " "
        }

        // Capitals
        if (text[i] == "Α") {
            content += "A"
        }
        if (text[i] == "Β") {
            content += "B"
        }
        if (text[i] == "Γ") {
            content += "G"
        }
        if (text[i] == "Δ") {
            content += "D"
        }
        if (text[i] == "Ε") {
            content += "E"
        }
        if (text[i] == "Ζ") {
            content += "Z"
        }
        if (text[i] == "Η") {
            content += "H"
        }
        if (text[i] == "Θ") {
            content += "TH"
        }
        if (text[i] == "Ι") {
            content += "I"
        }
        if (text[i] == "Κ") {
            content += "K"
        }
        if (text[i] == "Λ") {
            content += "L"
        }
        if (text[i] == "Μ") {
            content += "M"
        }
        if (text[i] == "Ν") {
            content += "N"
        }
        if (text[i] == "Ξ") {
            content += "KS"
        }
        if (text[i] == "Ο") {
            content += "O"
        }
        if (text[i] == "Π") {
            content += "P"
        }
        if (text[i] == "Ρ") {
            content += "R"
        }
        if (text[i] == "Σ") {
            content += "S"
        }
        if (text[i] == "Τ") {
            content += "T"
        }
        if (text[i] == "Υ") {
            content += "U"
        }
        if (text[i] == "Φ") {
            content += "F"
        }
        if (text[i] == "Χ") {
            content += "X"
        }
        if (text[i] == "Ψ") {
            content += "PS"
        }
        if (text[i] == "Ω") {
            content += "O"
        }

        // Numbers
        if (text[i] == "1") {
            content += "1"
        }
        if (text[i] == "2") {
            content += "2"
        }
        if (text[i] == "3") {
            content += "3"
        }
        if (text[i] == "4") {
            content += "4"
        }
        if (text[i] == "5") {
            content += "5"
        }
        if (text[i] == "6") {
            content += "6"
        }
        if (text[i] == "7") {
            content += "7"
        }
        if (text[i] == "8") {
            content += "8"
        }
        if (text[i] == "9") {
            content += "9"
        }
        if (text[i] == "0") {
            content += "0"
        }


        //English Small Letters
        if (text[i] == "a") {
            content += "a"
        }
        if (text[i] == "b") {
            content += "b"
        }
        if (text[i] == "c") {
            content += "c"
        }
        if (text[i] == "d") {
            content += "d"
        }
        if (text[i] == "e") {
            content += "e"
        }
        if (text[i] == "f") {
            content += "f"
        }
        if (text[i] == "g") {
            content += "g"
        }
        if (text[i] == "h") {
            content += "h"
        }
        if (text[i] == "i") {
            content += "i"
        }
        if (text[i] == "j") {
            content += "j"
        }
        if (text[i] == "k") {
            content += "k"
        }
        if (text[i] == "l") {
            content += "l"
        }
        if (text[i] == "m") {
            content += "m"
        }
        if (text[i] == "n") {
            content += "n"
        }
        if (text[i] == "o") {
            content += "o"
        }
        if (text[i] == "p") {
            content += "p"
        }
        if (text[i] == "q") {
            content += "q"
        }
        if (text[i] == "r") {
            content += "r"
        }
        if (text[i] == "s") {
            content += "s"
        }
        if (text[i] == "t") {
            content += "t"
        }
        if (text[i] == "u") {
            content += "u"
        }
        if (text[i] == "x") {
            content += "x"
        }
        if (text[i] == "y") {
            content += "y"
        }
        if (text[i] == "z") {
            content += "z"
        }
        if (text[i] == "v") {
            content += "v"
        }
        if (text[i] == "w") {
            content += "w"
        }

        //English Capital Letters
        if (text[i] == "A") {
            content += "A"
        }
        if (text[i] == "B") {
            content += "B"
        }
        if (text[i] == "C") {
            content += "C"
        }
        if (text[i] == "D") {
            content += "D"
        }
        if (text[i] == "E") {
            content += "E"
        }
        if (text[i] == "F") {
            content += "F"
        }
        if (text[i] == "G") {
            content += "G"
        }
        if (text[i] == "H") {
            content += "H"
        }
        if (text[i] == "I") {
            content += "I"
        }
        if (text[i] == "J") {
            content += "J"
        }
        if (text[i] == "K") {
            content += "K"
        }
        if (text[i] == "L") {
            content += "L"
        }
        if (text[i] == "M") {
            content += "M"
        }
        if (text[i] == "N") {
            content += "N"
        }
        if (text[i] == "O") {
            content += "O"
        }
        if (text[i] == "P") {
            content += "P"
        }
        if (text[i] == "Q") {
            content += "Q"
        }
        if (text[i] == "R") {
            content += "R"
        }
        if (text[i] == "S") {
            content += "S"
        }
        if (text[i] == "T") {
            content += "T"
        }
        if (text[i] == "U") {
            content += "U"
        }
        if (text[i] == "X") {
            content += "X"
        }
        if (text[i] == "Y") {
            content += "Y"
        }
        if (text[i] == "Z") {
            content += "Z"
        }
        if (text[i] == "V") {
            content += "V"
        }
        if (text[i] == "W") {
            content += "W"
        }

        // Some Simbols

        if (text[i] == "+") {
            content += "+"
        }
        if (text[i] == "[") {
            content += "["
        }
        if (text[i] == "]") {
            content += "]"
        }
        if (text[i] == ",") {
            content += ","
        }
        if (text[i] == ".") {
            content += "."
        }
        if (text[i] == "'") {
            content += "'"
        }
        if (text[i] == "@") {
            content += "@"
        }

        //Smal Letters With Tones
        if (text[i] == "ά") {
            content += "a"
        }

        if (text[i] == "έ") {
            content += "e"
        }

        if (text[i] == "ή") {
            content += "i"
        }

        if (text[i] == "ί") {
            content += "i"
        }
        if (text[i] == "ό") {
            content += "o"
        }
        if (text[i] == "ύ") {
            content += "u"
        }
        if (text[i] == "ώ") {
            content += "o"
        }



        // Capitals with tones
        if (text[i] == "Ά") {
            content += "A"
        }
        if (text[i] == "Έ") {
            content += "E"
        }

        if (text[i] == "Ή") {
            content += "H"
        }
        if (text[i] == "Ί") {
            content += "I"
        }
        if (text[i] == "Ό") {
            content += "O"
        }
        if (text[i] == "Ύ") {
            content += "U"
        }
        if (text[i] == "Ώ") {
            content += "O"
        }


    }


    return content
}