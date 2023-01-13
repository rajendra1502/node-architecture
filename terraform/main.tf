provider "aws" {
  region = "us-east-1"
}
resource "aws_instance" "servernode" {
  ami                    = "ami-0b5eea76982371e91"
  instance_type          = "t2.micro"
  key_name               = "firstHtml"
  aws_eip                = "107.22.22.63"
  #key_name              = "vpcpublickey"

  
   connection {
    type        = "ssh"
    host        = self.public_ip
    user        = "ec2-user"
    private_key = tls_private_key.mykey1.private_key_pem
    #private_key = "vpcpublickey"
    timeout     = "4m"
  }
  tags = {
    "name" = "Connect VM"
  }
}

resource "aws_security_group" "alb_security_group"{
  name="alb security group"
  ingress {
    from_port=22
    to_port=22
    protocol="tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description="ssh access"

}
  ingress {
    from_port=27017
    to_port=27017
    protocol="tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description="mongo access"

}
  ingress {
    from_port=4001
    to_port=4001
    protocol="tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description="node access"

}

  egress {
    from_port=0
    to_port=0
    protocol="-1"
    cidr_blocks=["0.0.0.0/0"]
  }

  tags={
    name="alb_security_group"
  }
}


########################## Define Key ###########################



output "instance_public_ip" {
  value     = aws_instance.servernode.public_ip
}
