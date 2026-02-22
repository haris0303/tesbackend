const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const dataPeserta = [
    { nama: "Arjuna Fitranando Rezky", password: "ijrg8", status: "TIDAK LULUS" },
    { nama: "Mochamad Rakha Al Fahrezy", password: "PjcKX", status: "LULUS" },
    { nama: "Ahmad Saifulloh", password: "RtDjo", status: "TIDAK LULUS" },
    { nama: "Laksa Tama Putra", password: "DrKbp", status: "LULUS" },
    { nama: "Jezilla Widiah Prahesti", password: "5ZfoW", status: "LULUS" },
    { nama: "Zakky favian naufal", password: "gyVE2", status: "TIDAK LULUS" },
    { nama: "Zulfikar Adi Nugroho", password: "sxSNq", status: "LULUS" },
    { nama: "Nadhif Kinsa Sarfaraz", password: "urfoO", status: "TIDAK LULUS" },
    { nama: "Suranata Paku Bramantyo", password: "eY2VZ", status: "LULUS" },
    { nama: "Andhika Kahar Prakoso", password: "INggJ", status: "LULUS" },
    { nama: "Natanaella Christtemnov", password: "7gJDM", status: "LULUS" },
    { nama: "Anugrah Damai Sejahtera Entheos Abba II", password: "nfm5Q", status: "LULUS" },
    { nama: "Naomi Timothea", password: "orsOE", status: "TIDAK LULUS" },
    { nama: "Reyhanisa Najwa Azalya", password: "ST9w2", status: "LULUS" },
    { nama: "Fadhil Fuadi Zain Sriyatno", password: "zXuIP", status: "TIDAK LULUS" },
    { nama: "Haydar Ali Yudo Daniswara", password: "R3rYr", status: "LULUS" },
    { nama: "Bernadine Griselda Valencia Agshe Putri Kiswantoro", password: "WP7Gf", status: "TIDAK LULUS" },
    { nama: "Azzaka Davi Ramadhan", password: "yFbyn", status: "TIDAK LULUS" },
    { nama: "Aqila Nareswari Rifqa Wardiyono", password: "8ObKy", status: "LULUS" },
    { nama: "Fernando Alvaro Pratomo", password: "xShIh", status: "TIDAK LULUS" },
    { nama: "Muhammad Fadhil Rasyid Irfani", password: "QTbq4", status: "TIDAK LULUS" },
    { nama: "Atharaditya Haidar Rizki", password: "LJKiw", status: "TIDAK LULUS" },
]

app.post("/cek", (req, res) => {
    const { nama, password } = req.body

    const peserta = dataPeserta.find(p =>
        p.nama.toLowerCase() === nama.toLowerCase() &&
        p.password === password
    )

    if (peserta) {
        res.json({ found: true, status: peserta.status })
    } else {
        res.json({ found: false })
    }
})

app.listen(5000, () => {
    console.log("Server jalan di http://localhost:5000")
})