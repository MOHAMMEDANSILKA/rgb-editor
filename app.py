import os
from flask import Flask, request, jsonify, send_file

app = Flask(__name__)

# API endpoint to handle the compilation.
@app.route('/compile', methods=['POST'])
def compile_code():
    # Get the C++ code from the request
    cpp_code = request.form.get('cpp_code')
    
    # Save the C++ code to a new file
    filename = 'user_code.cpp'
    with open(filename, 'w') as file:
        file.write(cpp_code)
    
    # Update the batch file to include the new C++ file
    batch_file = 'compile_and_run.bat'
    with open(batch_file, 'a') as file:
        file.write(f'\ng++ {filename} -o output.exe\noutput.exe')
    
    # Compile and run the C++ code
    os.system(f'g++ {filename} -o output.exe')
    output = os.popen('output.exe').read()
    
    return jsonify({'output': output})

@app.route('/')
def serve_html():
    # Change 'index.html' to the actual name of your HTML file
    return send_file('V5E1.html')

if __name__ == '__main__':
    app.run(debug=True)
