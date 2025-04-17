import oracledb from 'oracledb';
import dotenv from 'dotenv';

oracledb.initOracleClient({ libDir: '/root/oracle/instantclient/instantclient_21_12' });

dotenv.config({ path: '/var/www/html/api_cristalcopo/.env' });

async function connectToDatabase(query: string) {

  try {
    const connection = await oracledb.getConnection({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECT_STRING
    });

    console.log('Conexão bem-sucedida ao banco de dados Oracle! - (F3ITES - Base de testes Oracle)');

    // Exemplo de consulta
    const result = await connection.execute(query);
    console.log(result.rows);

    // Fechar a conexão
    await connection.close();
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  }
}

export default connectToDatabase;

//connectToDatabase('SELECT sysdate data, 1 numero  FROM dual');