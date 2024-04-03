def decode_message(encoded_message):
    decoded_message = {}
    steps, count = 1, 2
    message, num, temp = "", "", ""
    for char in encoded_message:
        if char.isdigit():
            num += char
        if char == " ":
            decoded_message[num] = ""
            temp = num
            num = ""
        if char.isalpha():
            decoded_message[temp] += char
    while str(steps) in decoded_message:
        if message == "":
            message += decoded_message[str(steps)]
        else:
            message += " " + decoded_message[str(steps)]
        steps += count
        count += 1
    return message

def decode(message_file):
    with open(message_file, "r") as file:
        encoded_message = file.read()
    decoded_message = decode_message(encoded_message)
    return decoded_message

print(decode("coding_qual_input.txt"))
