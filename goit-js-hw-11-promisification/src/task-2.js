

const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  
  const toggleUserState = (allUsers, userName) => {
    return new Promise(resolve => {
    resolve(allUsers, userName);    
    });    
  };
  
  const logger = updatedUsers => console.table(updatedUsers);
 
  /*
   * Должно работать так
   */
  toggleUserState(users, 'Mango').then(logger);
  toggleUserState(users, 'Lux').then(logger);
