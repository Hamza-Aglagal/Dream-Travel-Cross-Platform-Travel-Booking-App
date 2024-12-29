import { Resend } from "resend";



const resend = new Resend('re_NDQ7etrc_JWAKzGNnTWknuQ2eu1752PoT');


export async function GET() {

    await resend.sendEmail({
        from: 'Emsi@emsi.ecole.edu',
        to: 'ftyuiobaba@gmail.com',
        subject: 'Emploi de temps',
        react: '<EmailProf />',
    });
}