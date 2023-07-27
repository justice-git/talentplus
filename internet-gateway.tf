resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.reelcruit-vpc.id

  tags = { Name = "reelcruit-igw" }
}
