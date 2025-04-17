import axios from 'axios';
import dotenv from 'dotenv';
import pg_conexao from '../../../database/postgreSQL/database';

dotenv.config({ path: '/var/www/html/api_cristalcopo/.env' });

const AUTH_URL = `${process.env.URL_API}auth/${process.env.DEPOSITANTE_ID}`;

async function getAuth() {

    try{
        await pg_conexao('SELECT NOW() AS current_time');
    }catch(err){
        console.error('Erro ao conectar ao banco de dados:', err);
    }

};

async function setAuth() {
    try {
        //const response = await axios.get(AUTH_URL);
        //console.log('Response:', response.data);

        /*
        
            Receber o json e inserir no postgreSQL
        
        
        */ 

    } catch (error) {
        console.error('Error:', error);
    }

};

getAuth();


//https://api.comlog.com.br:2090/auth/{id}