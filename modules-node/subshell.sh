#!/bin/bash

echo "Parent shell PID: $$"

(
  # This block runs in a subshell
  echo "Subshell PID: $$"
  VAR="I am in a subshell: "
  echo $VAR $BASH_SUBSHELL 
)

# VAR is not accessible outside the subshell
echo $VAR  # This will be empty

