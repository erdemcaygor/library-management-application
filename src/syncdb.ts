import User from './models/user.model';
import Book from './models/book.model';
import Transaction from './models/transaction.model';
import sq from './db';

const syncDatabase = async () => {
  try {
    // Force sync all tables in order
    await sq.sync({ force: true }); // This will drop all tables first
    
    await User.sync();
    console.log("User Model synced");
    
    await Book.sync();
    console.log("Book Model synced");
    
    await Transaction.sync();
    console.log("Transaction Model synced");
    
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

export default syncDatabase;