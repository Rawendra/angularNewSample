export default class appServiceLogger {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
