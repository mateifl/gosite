import paramiko


class Connection:
    host = None
    port = None
    username = None
    password = None
    policy = paramiko.AutoAddPolicy

    def __init__(self, host, port, username, password):
        self.host = host
        self.port = port
        self.username = username
        self.password = password


class SSHOperations:

    connection = None
    client = None

    def __init__(self, connection):
        self.connection = connection

    def create_sftp_client(self):
        self.client = paramiko.SSHClient()
        try:
            self.client.load_system_host_keys()
            self.client.set_missing_host_key_policy(self.connection.policy)
            self.client.connect(self.connection.host, self.connection.port, self.connection.username, self.connection.password)
            sftp_client = self.client.open_sftp()
            return sftp_client
        except Exception:
            if self.client is not None:
                self.client.close()
                return None

    def transfer_file_to_host(self, local_file_path, remote_file_path):
        sftp_client = self.create_sftp_client()
        sftp_client.put(local_file_path, remote_file_path)
        sftp_client.close()

    def transfer_file_from_host(self, local_file_path, remote_file_path):
        sftp_client = self.create_sftp_client()
        sftp_client.get(remote_file_path, local_file_path)
        sftp_client.close()


def execute_command_remote(command, connection):
    client = paramiko.SSHClient()
    try:
        client.load_system_host_keys()
        client.set_missing_host_key_policy(connection.policy)
        client.connect(connection.host, connection.port, connection.username, connection.password)
        _, stdout, stderr = client.exec_command(command)

        while True:
            line = stdout.readline()
            if line is None or len(line) == 0:
                break
            print(line[:-1])

        while True:
            line = stderr.readline()
            if line is None or len(line) == 0:
                break
            print(line)
    finally:
        client.close()


if __name__ == "__main__":
    conn = Connection("s20.wservices.ch", 22, "zizicu", "M4UtpyC8")
    print("Transfer file")
    ssh_operations = SSHOperations(conn)
    ssh_operations.transfer_file_to_host("c:/dev/pyws/tests/ssh/commands.sh", "commands.sh")
    remote_commands = "mv commands.sh gosite/ ;  cd ~/gosite ; dos2unix commands.sh ; chmod a+x commands.sh ; ./commands.sh"
    execute_command_remote(remote_commands, conn)
    ssh_operations.transfer_file_from_host("files.txt", "/home/zizicu/gosite/files.txt")
