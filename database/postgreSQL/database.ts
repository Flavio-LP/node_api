import { Pool } from 'pg';
import dotenv from 'dotenv';

// Carregar variáveis de ambiente do arquivo .env
dotenv.config({ path: '/var/www/html/api_cristalcopo/.env' });

// Configuração do pool de conexões
const pool = new Pool({
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

// Função para testar a conexão
async function connectToDatabase(query: string) {

  try {
    const client = await pool.connect();
    console.log('Conexão bem-sucedida ao banco de dados PostgreSQL! (hmldb - Base de testes PostgreSQL)');

    // Exemplo de consulta
    const result = await client.query(query);
    console.log('Hora atual no banco de dados:', result.rows[0].current_time);

    client.release(); // Libera o cliente de volta para o pool
    pool.end(); // Fecha o pool de conexões
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  }
}

export default connectToDatabase;

//connectToDatabase('SELECT NOW() AS current_time');