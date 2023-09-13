
class CashBoxController {

  public calculateChange(purchase: number, money: number): Record<number, number> {
    const notesAvailable = [100, 10, 1];
    let change = money - purchase;

    if (change < 0) {
      throw new Error('Insufficient money to pay for the purchase.');
    }

    const changeNotes: Record<number, number> = {};

    for (const note of notesAvailable) {
      const numberOfNotes = Math.floor(change / note);
      if (numberOfNotes > 0) {
        changeNotes[note] = numberOfNotes;
        change -= numberOfNotes * note;
      }
    }

    return changeNotes;
  }
};

export default CashBoxController;